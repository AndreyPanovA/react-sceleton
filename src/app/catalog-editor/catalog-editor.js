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
import Waves from "@components/waves";

const catalogEditor = (props) => {
  const categoryId = props.match.params.categoryId;
  console.log(props, "myProps");
  const obj = {
    children: [],
    dateCreate: "2020-05-25T11:17:04.293Z",
    dateUpdate: "2020-05-25T11:17:04.293Z",
    description: "",
    name: "art",
    order: 9,
    parent: { _key: "2", _type: "category", _id: "5ecba930b6b0b01fd3dd35d3" },
    proto: {},
    title: "Художественная123",
    _id: "5ecba930b6b0b01fd3dd35d5",
    _key: "2.2",
    _type: "category",
  };

  useInit(async () => {
    await articles.init({ categoryId });
  }, [categoryId]);

  useInit(async () => {
    await categories.load({ fields: "*", limit: 1000 });
  });

  // function updateCategory() {

  // }

  return (
    <LayoutPage header={<HeaderContainer />}>
      <LayoutContent>
        <div className="white">
          <h1>Каталог</h1>
          <CategoryTree edit="true" />
          <Waves />
          <hr />
          {/* <ArticleList /> */}
        </div>
      </LayoutContent>
    </LayoutPage>
  );
};

catalogEditor.propTypes = {};

export default React.memo(catalogEditor);
