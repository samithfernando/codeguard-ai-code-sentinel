import { useState, useEffect } from 'react';
import { getWaitlistStats } from '@/lib/waitlistService';

export const useWaitlistStats = () => {
  const [stats, setStats] = useState({ count: 500, loading: true });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const result = await getWaitlistStats();
        setStats({ count: result.count, loading: false });
      } catch (error) {
        console.error('Error fetching waitlist stats:', error);
        setStats({ count: 500, loading: false }); // Fallback
      }
    };

    fetchStats();
  }, []);

  return stats;
};