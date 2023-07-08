import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
  We are thrilled to welcome you to our restaurant! At our establishment, we strive to provide a memorable dining experience that tantalizes your 
  taste buds and leaves you craving for more. Our team of talented chefs, attentive staff, and inviting ambiance work together to create an extraordinary
  culinary journey for our guests.
</p>
<p>
  <br></br>
  Indulge in our exquisite menu crafted with passion and precision. From appetizers bursting with flavor to delectable main courses and decadent desserts, 
  our culinary offerings cater to a variety of tastes and preferences. We source the finest, freshest ingredients to ensure every dish is a masterpiece.
</p>
<br></br>
<p>
  The warm and inviting atmosphere of our restaurant creates the perfect setting for a delightful dining experience. 
  Whether you're celebrating a special occasion, enjoying a romantic evening, or simply treating yourself to a satisfying meal, 
  our attentive staff is dedicated to providing exceptional service, ensuring your visit is memorable.
</p>
<br></br>
<p>
  We take pride in creating moments of gastronomic delight. From the meticulously prepared dishes to the thoughtful presentation, 
  every detail is crafted to deliver an unforgettable culinary experience. Join us as we embark on a culinary journey that will tantalize your senses and 
  leave you with cherished memories.
</p>
      </Box>
    </Layout>
  );
};

export default About;
