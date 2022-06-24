import { useState } from "react";

const MemberList = () => {
    const [datas, setDatas] = useState([]);
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
                            <td>{row.no}</td>
                            <td>{row.no}</td>
                            <td>{row.no}</td>
                            <td>{row.no}</td>
                            <td>{row.no}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    );
};

export default MemberList;