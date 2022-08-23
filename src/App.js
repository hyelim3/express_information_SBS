import React, { useState, useEffect } from "react";
import axios from "axios";
import MemberList from "./component/MemberList";
import InformationHead from "./component/InformationHead";

function App() {
  const [error, setError] = useState(null);
  const [members, setMembers] = useState([]);

  //1. 맨 데이터를 처음 불러옴 1회실행 안에 axios를 넣어서 데이터를 불러옴
  useEffect(() => {
    // console.log("api호출");
    const getData = async () => {
      try {
        const data = await axios({
          url: `http://localhost:4000/member`,
          method: "GET",
        });
        console.log(data.data);
        setMembers(data.data);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  const onToggle = async (id) => {
    try {
      const data = await axios({
        url: `http://localhost:4000/members/check/${id}`,
        method: "PATCH",
      });
      setMembers(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onRemove = async (id) => {
    try {
      await axios({
        url: `http://localhost:4000/members/check/${id}`,
        method: "DELETE",
      });
      const data = await axios({
        url: `http://localhost:4000/members`,
        method: "GET",
      });
      setMembers(data.data);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div className="max-w-6xl m-auto">
      <InformationHead />
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>id</th>
              <th>이름</th>
              <th>나이</th>
              <th>성별</th>
              <th>거주지</th>
              <th>연락처</th>
              <th>이메일</th>
              <th>가입일</th>
            </tr>
          </thead>
          <MemberList
            members={members}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        </table>
      </div>
    </div>
  );
}

export default App;
