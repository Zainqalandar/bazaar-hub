interface ProductDetailPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <section>
      <h2>Product detail</h2>
      <p>Product ID: {params.id}</p>
    </section>
  );
}
