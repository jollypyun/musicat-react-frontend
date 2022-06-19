import { useState } from "react";
import { useTable } from "react-table";
import { Button, Form } from "react-bootstrap";

const Table = ({column, data}) => {
    const {} = useTable({column, data});
};

const MemberListForm = () => {
    return (
        <div className="container-fluid px-4">
            <div className="row mt-3 mb-5">
                <div className="memberList-search-style">
                    <Form.Select aria-aria-label="">
                        <option value="email">ID</option>
                        <option value="name">등급</option>
                    </Form.Select>
                    <Button>검색</Button>
                </div>
                <div className="memberList-list-style">
                    <TableSheet>
                        <TableHeader>
                            
                        </TableHeader>                
                    </TableSheet>
                </div> 
            </div>
        </div>
    );
};

export default MemberListForm;