import React from "react";
import articles from "@store/articles/actions";
import categories from "@store/categories/actions";
import LayoutContent from "@components/layouts/layout-content";
import HeaderContainer from "@containers/header-container";
import LayoutPage from "@components/layouts/layout-page";
import CategoryTree from "@containers/category-tree";
import useInit from "@utils/hooks/use-init";
import "./style.less";
import "../../theme/style.less";
import Waves from "@components/waves";

const catalogEditor = (props) => {
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
        <div className="white">
          <h1>Каталог с возможностью редактирования</h1>
          <CategoryTree edit="true" />
          <Waves />
          <hr />
        </div>
      </LayoutContent>
    </LayoutPage>
  );
};

export default React.memo(catalogEditor);
