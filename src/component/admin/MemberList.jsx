import { useCallback } from "react";
import { useState } from "react";
import { getMemberLIst } from "../../api/adminMemberLIst";

const MemberList = () => {
    const [datas, setDatas] = useState([]);
    const getInitialMember = useCallback((data) => {

    });

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>ID</th>
                        <th>등급</th>
                        <th>가입 날짜</th>
                        <th>방문 횟수</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    {datas?.map((row) => {
                        <tr>
                            <td>{row.no}</td>
                            <td>{row.email}</td>
                            <td>{row.grade}</td>
                            <td>{row.regDate}</td>
                            <td>{row.visits}</td>
                            <td>{row.ban}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    );
};

export default MemberList;