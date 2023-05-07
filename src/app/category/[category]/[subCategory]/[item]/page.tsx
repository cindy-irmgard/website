import { categories } from "@/data";
import Image from "next/image";

const ItemPage = ({ params }) => {
  const category = categories.find(({ slug }) => slug === params.category);
  const subCategory = category?.subCategories.find(
    ({ slug }) => slug === params.subCategory
  );
  const item = subCategory?.items.find(({ slug }) => slug === params.item);

  if (!item) return null;

  return (
    <div className="container">
      <Image
        src={item.image}
        alt={item.name}
        style={{
          height: "auto",
          width: "auto",
          maxWidth: "50vw",
          maxHeight: "70vh",
          objectFit: "contain",
          borderRadius: 16,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 48,
            }}
          >
            {item.name}
          </h1>
          {item.description && (
            <p style={{ marginTop: "20px" }}>{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
