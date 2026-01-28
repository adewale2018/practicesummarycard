interface RecommendationsProps {
  recommendations: string[];
}

function RecommendationsPage({ recommendations }: RecommendationsProps) {
  <section>
    <ul>
      {recommendations?.map((recommendation) => (
        <li>{recommendation}</li>
      ))}
    </ul>
  </section>;
}

export default RecommendationsPage;
