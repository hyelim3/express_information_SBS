import React from "react";
import { FiUserX, FiUserCheck, FiEdit } from "react-icons/fi";
import { FaUserCheck } from "react-icons/fa";

const MemberListItem = ({ member, onToggle, onRemove }) => {
  const { id, checked } = member;
  return (
    <tr>
      <th></th>
      <td>{member.id}</td>
      <td>{member.이름}</td>
      <td>{member.나이}</td>
      <td>{member.성별}</td>
      <td>{member.거주지}</td>
      <td>{member.연락처}</td>
      <td>{member.이메일}</td>
      <td>{member.가입일}</td>
      <td
        className="cursor-pointer"
        onClick={() => {
          // console.log("사람눌림");
          onToggle(id);
        }}
      >
        {checked ? (
          <FaUserCheck
          // style={{
          //   display: "block",
          //   border: "2px red solid",
          // }}
          />
        ) : (
          <FiUserCheck style={{}} />
        )}
        {/* FiUserCheck 흰색 */}
      </td>
      <td>
        <FiEdit />
      </td>
      <td
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <FiUserX />
      </td>
    </tr>
  );
};

export default MemberListItem;
