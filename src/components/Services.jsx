import React from "react";
import Card from "./Card";

const Services = () => {
  const data = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Our application exposes API's that allow users to perform CRUD operations. Users can create, read, update, and delete data records effortlessly through these endpoints. Additionally, our application includes User Registration API's.",
      logo: "https://cdn-icons-png.flaticon.com/128/126/126229.png",
    },
    {
      id: 2,
      title: "Graphic Designing",
      description:
        "Our application exposes API's that allow users to perform CRUD operations. Users can create, read, update, and delete data records effortlessly through these endpoints. Additionally, our application includes User Registration API's.",
      logo: "https://cdn-icons-png.flaticon.com/128/126/126229.png",
    },
    {
      id: 3,
      title: "IT Support",
      description:
        "Our application exposes API's that allow users to perform CRUD operations. Users can create, read, update, and delete data records effortlessly through these endpoints. Additionally, our application includes User Registration API's.",
      logo: "https://cdn-icons-png.flaticon.com/128/126/126229.png",
    },
    {
      id: 4,
      title: "SEO",
      description:
        "Our application exposes API's that allow users to perform CRUD operations. Users can create, read, update, and delete data records effortlessly through these endpoints. Additionally, our application includes User Registration API's.",
      logo: "https://cdn-icons-png.flaticon.com/128/126/126229.png",
    },
    {
      id: 5,
      title: "App Development",
      description:
        "Our application exposes API's that allow users to perform CRUD operations. Users can create, read, update, and delete data records effortlessly through these endpoints. Additionally, our application includes User Registration API's.",
      logo: "https://cdn-icons-png.flaticon.com/128/126/126229.png",
    },
    {
      id: 6,
      title: "Content Writing",
      description:
        "Our application exposes API's that allow users to perform CRUD operations. Users can create, read, update, and delete data records effortlessly through these endpoints. Additionally, our application includes User Registration API's.",
      logo: "https://cdn-icons-png.flaticon.com/128/126/126229.png",
    },
    {
      id: 7,
      title: "Digital Marketing",
      description:
        "Our application exposes API's that allow users to perform CRUD operations. Users can create, read, update, and delete data records effortlessly through these endpoints. Additionally, our application includes User Registration API's.",
      logo: "https://cdn-icons-png.flaticon.com/128/126/126229.png",
    },
    {
      id: 8,
      title: "Consulting",
      description:
        "Our application exposes API's that allow users to perform CRUD operations. Users can create, read, update, and delete data records effortlessly through these endpoints. Additionally, our application includes User Registration API's.",
      logo: "https://cdn-icons-png.flaticon.com/128/126/126229.png",
    },
  ];
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center w-full font-bold pt-10 pb-10"
    >
      <div>
        <h2 className="text-5xl text-white text-center">Service's</h2>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10 ">
        {data.map((item, id) => (
          <Card key={item.id} items={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
