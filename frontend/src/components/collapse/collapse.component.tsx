import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState, MouseEvent} from "react";

const CollapseComponent = ({name}: { name: string }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const collapse = (event: MouseEvent<HTMLElement>) => {
        const clicked = (event.target as HTMLElement).closest("li");
        if (!clicked) return;

        const hiddenElement = [...clicked.children]?.at(-1);
        hiddenElement?.classList.toggle("hidden");
        setIsCollapsed(!isCollapsed);
    };

    return (
        <li>
            <div onClick={collapse} className="flex justify-between items-center">
                <h3 className="font-bold text-white text-2xl">{name}</h3>
                <span className="text-white"><FontAwesomeIcon
                    icon={isCollapsed ? faMinus : faPlus}></FontAwesomeIcon></span>
            </div>
            <div className="hidden">
                <div className="pl-5 text-white">Lorem ipsum.</div>
                <div className="pl-5 text-white">Lorem ipsum.</div>
                <div className="pl-5 text-white">Lorem ipsum.</div>
                <div className="pl-5 text-white">Lorem ipsum.</div>
                <div className="pl-5 text-white">Lorem ipsum.</div>
                <div className="pl-5 text-white">Lorem ipsum.</div>
            </div>
        </li>
    )
}

export default CollapseComponent;