import { Category } from "@/components/Category";
import { categories } from "@/data";

const CategoryPage = ({ params }) => {
  const category = categories.find(({ slug }) => slug === params.category);

  return (
    <div className="container">
      {category?.subCategories?.map(({ slug, name, backgroundImage }) => (
        <Category
          key={slug}
          href={`/category/${category.slug}/${slug}/`}
          name={name}
          image={backgroundImage}
        />
      ))}
    </div>
  );
};

export default CategoryPage;
