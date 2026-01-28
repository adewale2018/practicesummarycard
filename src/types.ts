export interface PracticeStats {
  newPatientsThisMonth: number;
  appointmentRequests: number;
  showRate: number; // e.g 75.0
  conversionRate: number; 
}

export interface PracticeSummaryProps {
  id: string;
  name: string;
  conversionRate: number; // e.g 18.5
  location: {
    city: string;
    country: string;
  };

  PracticeStats: PracticeStats;
  monthlyTrend: number[]; // array of numbers representing monthly data
  recommendations: string[];
}
