import React from 'react';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShopIcon from '@material-ui/icons/Shop';
import CategoryIcon from '@material-ui/icons/Category';

export const entities = [
  {
    route: "booking",
    title: "Booking",
    icon: <ShopIcon style={{ color: "red" }} />
  },
  {
    route: "client",
    title: "Client",
    icon: <PeopleIcon style={{ color: "orange" }} />
  },
  {
    route: "product",
    title: "Product",
    icon: <ShoppingCartIcon style={{ color: "#3aa8ff" }} />
  },
  {
    route: "producer",
    title: "Producer",
    icon: <LocalMallIcon style={{ color: "#2ce62c" }} />
  },
  {
    route: "category",
    title: "Category",
    icon: <CategoryIcon style={{ color: "yellow" }} />
  },
  {
    route: "product_rate",
    title: "Product rate",
    icon: <ThumbUpIcon style={{ color: "white" }} />
  }
]