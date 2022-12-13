import React from "react";
import BreadCrumbsNav from "../../components/BreadCrumbsNav/BreadCrumbsNav";
import {S1About,  S2About,S3About,S4GalleryAbout,S5CommentsAbout,} from './containers/index'

export default function About() {
  return (
    <>
      <BreadCrumbsNav pageTo={"О нас"} />
      <S1About />
      <S2About />
      <S3About/>
      <S4GalleryAbout/>
      <S5CommentsAbout/>
    </>
  );
}
