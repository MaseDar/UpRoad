import axios from "axios";
import { Dispatch } from "react";
import { RoadmapAction, RoadmapActionTypes } from "../../types/roadmap";
import { token } from "./config";

export const getRoadmap = (id?: string | undefined) => {
  return async (dispatch: Dispatch<RoadmapAction>) => {
    // Установка загрузки
    dispatch({ type: RoadmapActionTypes.LOADING_ROADMAP });
    // Запрос
    await axios
      .get(`http://localhost:3000/api/v1/roadmap/${id}`, token)
      .then((res) =>
        dispatch({
          type: RoadmapActionTypes.GET_ROADMAP,
          roadmap: res.data,
        })
      )
      .catch((e) =>
        dispatch({
          type: RoadmapActionTypes.ERROR,
          error: "Ошибка: " + e,
        })
      );
  };
};
