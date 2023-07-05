import CollapseComponent from "../collapse/collapse.component.tsx";

const SidebarComponent = () => {
    return (
        <div className="flex-col gap-7 p-4">
            <h2 className="text-3xl text-white font-bold">Filters</h2>
            <ul>
                <CollapseComponent name="contains"></CollapseComponent>
                <CollapseComponent name="time durations"></CollapseComponent>
                <CollapseComponent name="services"></CollapseComponent>
                <CollapseComponent name="idk"></CollapseComponent>
            </ul>
        </div>
    )
}

export default SidebarComponent;