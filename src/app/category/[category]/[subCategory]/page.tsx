import { categories } from "@/data";
import { Category } from "@/components/Category";

const SubCategoryPage = ({ params }) => {
  const category = categories.find(({ slug }) => slug === params.category);
  const subCategory = category?.subCategories.find(
    ({ slug }) => slug === params.subCategory
  );

  return (
    <div className="container">
      {category &&
        subCategory?.items.map(({ slug, name, image }) => (
          <Category
            key={slug}
            href={`/category/${category.slug}/${subCategory.slug}/${slug}`}
            name={name}
            image={image}
          />
        ))}
    </div>
  );
};

export default SubCategoryPage;
