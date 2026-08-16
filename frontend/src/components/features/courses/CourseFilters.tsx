export const CourseFilters = () => {
  return (
    <div className="flex flex-col w-80">
      <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Filters</h2>
      
      <FilterSection title="Course Type">
        <FilterCheckbox label="Course" />
        <FilterCheckbox label="Path" />
        <FilterCheckbox label="Specialization" />
      </FilterSection>

      <FilterSection title="Price">
        <FilterRadio name="price" label="Free" checked />
        <FilterRadio name="price" label="Paid" />
        <FilterRadio name="price" label="Subscription" />
        <FilterRadio name="price" label="Contact for Price" />
      </FilterSection>

      <FilterSection title="Duration">
        <FilterRadio name="duration" label="Less than 2 hours" checked />
        <FilterRadio name="duration" label="2-5 hours" />
        <FilterRadio name="duration" label="5-10 hours" />
        <FilterRadio name="duration" label="More than 10 hours" />
      </FilterSection>

      <FilterSection title="Difficulty">
        <FilterRadio name="difficulty" label="Beginner" checked />
        <FilterRadio name="difficulty" label="Intermediate" />
        <FilterRadio name="difficulty" label="Advanced" />
      </FilterSection>
    </div>
  );
};

const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <>
    <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{title}</h3>
    <div className="px-4">{children}</div>
  </>
);

const FilterCheckbox = ({ label }: { label: string }) => (
  <label className="flex gap-x-3 py-3 flex-row">
    <input
      type="checkbox"
      className="h-5 w-5 rounded border-[#dde0e3] border-2 bg-transparent text-[#528bc5] checked:bg-[#528bc5] checked:border-[#528bc5] checked:bg-[image:var(--checkbox-tick-svg)] focus:ring-0 focus:ring-offset-0 focus:border-[#dde0e3] focus:outline-none"
    />
    <p className="text-[#121416] text-base font-normal leading-normal">{label}</p>
  </label>
);

const FilterRadio = ({ name, label, checked = false }: { name: string; label: string; checked?: boolean }) => (
  <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dde0e3] p-[15px] mb-3 last:mb-0">
    <input
      type="radio"
      className="h-5 w-5 border-2 border-[#dde0e3] bg-transparent text-transparent checked:border-[#121416] checked:bg-[image:var(--radio-dot-svg)] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#121416]"
      name={name}
      defaultChecked={checked}
    />
    <div className="flex grow flex-col">
      <p className="text-[#121416] text-sm font-medium leading-normal">{label}</p>
    </div>
  </label>
);