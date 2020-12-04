//importing libraries, components and styles
import React from 'react';
import 'aos/dist/aos.css';
import { Title, TextContent, Detail } from './ContentElements';
//types
interface Props {
  textContentRef: React.RefObject<HTMLDivElement>;
  title: string | undefined;
  detail: string | undefined;
}
//Text content component
const Content: React.FC<Props> = ({ textContentRef, title, detail }) => {
  return (
    <TextContent className="text-content" ref={textContentRef}>
      <Title className="title" data-aos="fade-up">
        {title}
      </Title>
      <Detail
        className="detail"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {detail}
      </Detail>
    </TextContent>
  );
};

export default Content;
