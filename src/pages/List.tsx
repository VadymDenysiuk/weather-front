import React, { useCallback, useEffect, useState } from "react";
import getHistory from "../service/get-history";
import { IHistoryItem } from "../types";
import Header from "../components/List/Header";
import ListItem from "../components/List/ListItem";

const List: React.FC = () => {
  const [list, setList] = useState<IHistoryItem[]>();

  const getList = useCallback(async () => {
    const response = await getHistory();
    if (response.length > 0) setList(response);
  }, []);

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="history">
      <div className="history__container container">
        <Header />
        {list ? (
          <div className="history__list">
            {list?.map((item) => (
              <ListItem key={item._id} data={item.weather} />
            ))}
          </div>
        ) : (
          <div className="history__empty">
            <p className="history__empty-text">You have no query history yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
