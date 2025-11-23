import { supabase } from './supabase';
import { sendWelcomeEmail } from './emailService';

export interface WaitlistEntry {
  id?: string;
  email: string;
  name?: string;
  created_at?: string;
  source?: string;
}

export const addToWaitlist = async (entry: Omit<WaitlistEntry, 'id' | 'created_at'>): Promise<{ success: boolean; message: string; data?: any }> => {
  try {
    // First, check if email already exists
    const { data: existingEntry, error: checkError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', entry.email.toLowerCase())
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      throw checkError;
    }

    if (existingEntry) {
      return {
        success: false,
        message: 'You\'re already on our waitlist! Check your email for confirmation.'
      };
    }

    // Add to Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email: entry.email.toLowerCase(),
          name: entry.name || null,
          source: entry.source || 'website',
          created_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    // Send welcome email
    try {
      await sendWelcomeEmail({
        email: entry.email,
        name: entry.name
      });
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the whole operation if email fails
    }

    return {
      success: true,
      message: 'Welcome to CodeGuard AI! Check your email for confirmation.',
      data
    };

  } catch (error) {
    console.error('Waitlist signup error:', error);
    
    if (error instanceof Error) {
      return {
        success: false,
        message: 'Something went wrong. Please try again later.'
      };
    }

    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.'
    };
  }
};

export const getWaitlistStats = async (): Promise<{ count: number; error?: string }> => {
  try {
    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (error) {
      throw error;
    }

    return { count: count || 0 };
  } catch (error) {
    console.error('Error fetching waitlist stats:', error);
    return { count: 500, error: 'Failed to fetch stats' }; // Fallback number
  }
};