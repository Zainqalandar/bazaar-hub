interface EditProductPageProps {
  params: { id: string };
}

export default function EditProductPage({ params }: EditProductPageProps) {
  return (
    <section>
      <h3>Edit product</h3>
      <p>Product ID: {params.id}</p>
    </section>
  );
}
