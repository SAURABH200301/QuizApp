import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QuestionTemplate from "../UI/QuestionTemplate";

function QuestionDisplay(prop) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="border w-100 p-5">
      <Slider {...settings}>
        {prop.questions.map((question) => (
          <div key={question._id}>
            <QuestionTemplate question={question} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default QuestionDisplay;
