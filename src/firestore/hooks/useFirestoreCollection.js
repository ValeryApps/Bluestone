import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  async_action_start,
  async_action_error,
  async_action_finish,
} from "../../store/asyncReducer";
import { dataFromSnapshot } from "../firestoreService";

export const useFirestoreCollection = ({ query, data, deps }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(async_action_start());
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => dataFromSnapshot(doc));
        data(docs);
        dispatch(async_action_finish());
      },
      (error) => dispatch(async_action_error(error))
    );
    return () => {
      unsubscribe();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};
