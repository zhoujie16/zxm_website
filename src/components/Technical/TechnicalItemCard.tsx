import Link from "next/link";
import BaseImage from "../BaseImage";
import { CategoriesListItemType } from "@/types";

const Index = ({
  categoriesItem,
}: {
  categoriesItem: CategoriesListItemType;
}) => {
  return (
    <>
      <div className="categories_card">
        <Link href={`/archives/${categoriesItem.category_id}`}>
          <div className="categories_card_inner">
            <div className="categories_card_l">
              <div className="categories_card_icon">
                <BaseImage />
              </div>
            </div>
            <div className="categories_card_r">
              <div className="categories_card_title">
                {categoriesItem.title}
              </div>
              <div className="categories_card_desc">
                {categoriesItem.sub_title}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Index;
