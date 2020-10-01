import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "@store/articles/actions";
import categories from "@store/categories/actions";
import LayoutContent from "@components/layouts/layout-content";
import HeaderContainer from "@containers/header-container";
import LayoutPage from "@components/layouts/layout-page";
import ArticleList from "@containers/article-list";
import CategoryTree from "@containers/category-tree";
import useInit from "@utils/hooks/use-init";
import PropTypes from "prop-types";
import "./style.less";
import "../../theme/style.less";

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
          <h1>Каталог</h1>
          <CategoryTree />
          <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
              <div className="wave waveTop"></div>
            </div>
            <div className="waveWrapperInner bgMiddle">
              <div className="wave waveMiddle"></div>
            </div>
            <div className="waveWrapperInner bgBottom">
              <div className="wave waveBottom"></div>
            </div>
          </div>
          <hr />
          <ArticleList />
        </div>
      </LayoutContent>
    </LayoutPage>
  );
};

catalogEditor.propTypes = {};

export default React.memo(catalogEditor);
