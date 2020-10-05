import React from "react";
import articles from "@store/articles/actions";
import categories from "@store/categories/actions";
import LayoutContent from "@components/layouts/layout-content";
import HeaderContainer from "@containers/header-container";
import LayoutPage from "@components/layouts/layout-page";
import CategoryTree from "@containers/category-tree";
import useInit from "@utils/hooks/use-init";
import Waves from "@components/waves";

const СatalogEditor = (props) => {
  const categoryId = props.match.params.categoryId;
  useInit(async () => {
    await articles.init({ categoryId });
  }, [categoryId]);

  useInit(async () => {
    await categories.load({ fields: "*", limit: 1000 });
  });
  return (
    <LayoutPage header={<HeaderContainer />}>
      <LayoutContent>
        <h1>Каталог с возможностью редактирования</h1>
        <CategoryTree edit="true" />
        <Waves />
        <hr />
      </LayoutContent>
    </LayoutPage>
  );
};

export default React.memo(СatalogEditor);
