import { useOthers } from "@/liveblocks.config"
import LiveCurSors from "./cursor/LiveCurSors"

const Live = () => {
    const others = useOthers();
  return (
    <div>
        <LiveCurSors/>
    </div>
  )
}

export default Live