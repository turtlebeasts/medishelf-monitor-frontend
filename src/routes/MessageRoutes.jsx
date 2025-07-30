import { Route } from "react-router-dom";
import Messages from "../layouts/Messages";

export default function MessageRoutes() {
    return (
        <Route path="messages">
            <Route index element={<Messages />} />
            <Route path=":conversationId" element={<Messages />} />
        </Route>
    )
}
