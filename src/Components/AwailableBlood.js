import { bloodGroups } from "../mocks/constantData"
const AwailableBlood = () => {
    
    return (
        <section className="w-8/12 min-h-40 mx-auto py-8 space-y-4">
            <h1 className="text-3xl mb-4">Available Blood</h1>
            {bloodGroups.map(groupName => (
                <div key={groupName.id} className="w-full bg-slate-300 flex items-center justify-between px-20 py-2 rounded-lg">
                    <h2 className="text-xl">{groupName.group}</h2>
                    <p className="text-md">Awailable Blood Units: {groupName.available}</p>
                </div>
            ))}
        </section>
    )
}

export default AwailableBlood;