import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  async_action_error,
  async_action_finish,
  async_action_start,
} from "../../store/asyncReducer";

import { dataFromSnapshot } from "../firestoreService";

export const useFirestsoreDoc = ({
  query,
  data,
  deps,
  shouldExecute = true,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!shouldExecute) return;
    dispatch(async_action_start());
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        if (!snapshot.exists) {
          dispatch(
            async_action_error({
              code: "not-found",
              message: "Oops! The document you are looking for doesn't exist",
            })
          );
          return;
        }
        data(dataFromSnapshot(snapshot));
        dispatch(async_action_finish());
      },
      (error) => dispatch(async_action_error(error))
    );
    return () => {
      unsubscribe();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};
