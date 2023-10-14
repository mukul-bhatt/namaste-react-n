import { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="section-instamart">
      <h3 className="font-bold text-xl title-instamart">
        This is {title} component
      </h3>

      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="button-instamart"
        >
          Hide
        </button>
      ) : (
        <button onClick={() => setIsVisible(true)} className="button-instamart">
          Show
        </button>
      )}

      <p>{isVisible && description}</p>
    </div>
  );
};

const Instamart = () => {
  return (
    <div>
      <Section
        title={"ABout Instamart"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ab neque error earum ut aliquid cupiditate architecto, voluptates iure quis hic eaque unde. Velit, ex inventore. Incidunt tempora repellat nihil."
        }
      />
      <Section
        title={"Careers Instamart"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ab neque error earum ut aliquid cupiditate architecto, voluptates iure quis hic eaque unde. Velit, ex inventore. Incidunt tempora repellat nihil."
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ab neque error earum ut aliquid cupiditate architecto, voluptates iure quis hic eaque unde. Velit, ex inventore. Incidunt tempora repellat nihil."
        }
      />
    </div>
  );
};

export default Instamart;
