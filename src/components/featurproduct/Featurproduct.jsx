/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../card/Card';
import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material';

import useFetch from '../../hooks/useFetch';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Featurproduct = ({type}) => {

const { data } = useFetch(
  `/products?populate=*&filters[type][$eq]=${type}`
);

  const matches = useMediaQuery("(max-width:900px)");

  return (
    <Container>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={8}
        paddingY="30px"
      >
        <Typography
          variant="h4"
          color="initial"
          sx={{
            flex: "1",
            whiteSpace: "nowrap",
            fontSize: { xs: "22px", sm: "30px" },
          }}
        >
          {type} Product
        </Typography>
        <Typography
          variant="p"
          color="initial"
          sx={{
            flex: "1",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          sapiente
        </Typography>
      </Stack>
      <Box sx={{ height: "500px" }}>
        <Swiper
          style={{ height: "100%" }}
          slidesPerView={matches ? 2 : 3}
          spaceBetween={10}
          // pagination={{
          //   clickable: false,
          // }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}

export default Featurproduct
