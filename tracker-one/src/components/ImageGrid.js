import React from 'react'
import LazyLoad from "react-lazyload";
import {motion} from "framer-motion";

const ImageGrid = () => {
    return (
      <section className="image-grid">
        <h1>
          {" "}
          The Coronavirus (COVID-19) has impacted all of us around the world. In
          this challenging time, it is important to remember that we are in this
          together and must all do our part to stop the spread of this virus. To
          that end, our staff will work remotely and will eliminate all business
          travel until this immediate crisis is over. As this situation evolves,
          we advise that everyone stay informed on the latest information
          communicated by their national and local governments, including the
          specific protection measures and procedures recommended for your area.
          Below are some basic protective measures that have been provided by
          the World Health Organization that all would be wise to follow.
        </h1>
        <LazyLoad height={1000}>
          <motion.div
            initital={{
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1.3,
            }}
            tranistion={{
              type: "spring",
              stiffness: 16,
              duration: 15,
            }}
          >
            <section className="container-two">
              <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_1.1_WashHands.jpg" />
              <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_1.2_SocialDistance-1.jpg" />
              <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_1.3_AvoidTouching.jpg" />
              <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_1.4_RespiratoryHygeine.jpg" />
              <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_1.5_SeekCare.jpg" />
              <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_1.6_StayInformed.jpg" />
            </section>
          </motion.div>
        </LazyLoad>
        <h1>
          {" "}
          While protective measures like social distancing are necessary to keep
          us safe, they can also lead to other health issues. Staying indoors,
          limiting social interactions, eating unhealthy foods, and following
          stressful, virus-related news can have a cumulative negative impact on
          your well-being. Therefore, in addition to measures targeted at
          limiting the spread of the virus, it is also important to engage in
          behaviors that contribute to general physical and mental health. These
          include:
        </h1>
        <LazyLoad height={1000}>
          <motion.div
            initital={{
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1.3,
            }}
            tranistion={{
              type: "spring",
              stiffness: 16,
              duration: 15,
            }}
          >
        <section className="container-one">
          <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_2.1_Sleep.jpg" />
          <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_2.2_Hydration.jpg" />
          <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_2.3_Diet.jpg" />
          <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_2.4_Exercise.jpg" />
          <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_2.5_ManageAnxiety.jpg" />
          <img src="https://www.smokefreeworld.org/wp-content/uploads/2020/03/COVID_2.6_MaintainConnections.jpg" />
        </section>
        
        </motion.div>
        </LazyLoad>
        <h1>
          {" "}
          COVID-19 is primarily a respiratory illness that has the potential to
          cause severe symptoms in former or current smokers. Early data from
          China indicates that smokers may have a substantially increased risk
          of suffering the most serious consequences of the virus. This evidence
          echoes existing research on influenza, pneumonia, tuberculosis, and
          bronchitis—all of which disproportionately affect smokers. Increased
          risk of these diseases, and of the novel coronavirus, represents yet
          another reason for smokers to quit. The Foundation is dedicated to
          improving global health and will work with our partners to provide
          guidance and assistance when we can during this crisis.
        </h1>
      </section>
    );
}

export default ImageGrid
