'use client';
import ContentSection from "@/components/ContentSection";
import MyNavbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import React from 'react'

const withOuterClass = (OuterClass) => (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <ContentSection>
          <WrappedComponent {...this.props} />
        </ContentSection>
      );
    }
  };
};





const WrappedComponentWithOuterClass = withOuterClass(ContentSection)(PostCard);
export default function MyPage() {

  return <div>
    <MyNavbar/>
    <WrappedComponentWithOuterClass/>
  </div>
}