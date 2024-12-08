import React, { useCallback, useEffect, useState } from "react";
import getHistory from "../service/get-history";
import { IHistoryItem, LoadStatus } from "../types";
import Header from "../components/List/Header";
import ListItem from "../components/List/ListItem";
import Spinner from "../components/shared/Spinner/Spinner";

const List: React.FC = () => {
  const [list, setList] = useState<IHistoryItem[]>();
  const [status, setStatus] = useState<LoadStatus>(LoadStatus.Loading);

  const getList = useCallback(async () => {
    setStatus(LoadStatus.Loading);
    const response = await getHistory();
    if (response.length > 0) {
      setList(response);
      setStatus(LoadStatus.Success);
    } else {
      setStatus(LoadStatus.Failed);
    }
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <div className="history">
      {status === LoadStatus.Loading ? <Spinner /> : null}
      <div className="history__container container">
        <Header />

        {status === LoadStatus.Success ? (
          <div className="history__list">
            {list?.map((item) => (
              <ListItem key={item._id} data={item.weather} />
            ))}
          </div>
        ) : null}

        {status === LoadStatus.Failed ? (
          <div className="history__empty">
            <p className="history__empty-text">You have no query history yet</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default List;
