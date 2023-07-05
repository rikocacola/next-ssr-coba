function ProductList(props) {
  const { promos } = props;
  console.log("Promo data: ", promos);
  return (
    <>
      <h1>List of promos</h1>
      {promos.map((promo) => {
        return (
          <div key={promo.id}>
            <h2>{promo.attributes.slug}</h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  console.log("Generating / Regenerating ProductList");
  const response = await fetch("http://172.30.114.10:1337/api/promos");
  const data = await response.json();

  return {
    props: {
      promos: data.data,
    },
    revalidate: 10,
  };
}
