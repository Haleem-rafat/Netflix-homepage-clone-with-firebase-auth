import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { React, useState, useEffect } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      SetMovies(res.data.results);
    });
  }, [fetchURL]);

  const sliderLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <div>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center group">
          <MdChevronLeft
            onClick={sliderLeft}
            className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
          <div
            id={"slider" + rowID}
            className="w-full h-full overflow-x-scroll overflow-hidden whitespace-nowrap scroll-smooth relative"
          >
            {movies.map((item, id) => (
              <Movie key={id} item={item} />
            ))}
          </div>
          <MdChevronRight
            onClick={sliderRight}
            className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Row;
