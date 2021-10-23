import useStore from 'store';
import Checkbox from '@ui/Checkbox';
import FiltersContainer from './components/FiltersContainer';

const rolesFilters = [
  { name: 'Front-end', value: 'frontend' },
  { name: 'Back-end', value: 'backend' },
  { name: 'Automation', value: 'automation' },
  { name: 'Designer', value: 'design' },
];

const frontEndTechs = [
  { name: 'React', value: 'react' },
  { name: 'Angular', value: 'angular' },
  { name: 'Vue', value: 'vue' },
];

const backEndTechs = [
  { name: 'Django', value: 'django' },
  { name: 'Node-js', value: 'nodeJs' },
  { name: 'Java', value: 'java' },
];

const automationTechs = [
  { name: 'Test cafe', value: 'test-cafe' },
  { name: 'Cypress', value: 'cypress' },
  { name: 'Selenium', value: 'selenium' },
];

const designTechs = [
  { name: 'Figma', value: 'figma' },
  { name: 'XD', value: 'xd' },
  { name: 'PhotoShop', value: 'photoshop' },
];

const techs = {
  frontend: frontEndTechs,
  backend: backEndTechs,
  automation: automationTechs,
  design: designTechs,
};

const FindProjectFilters = () => {
  const { filters, toggleFilter, removeFilter } = useStore((state) => state);

  let techsFilters: { name: string; value: string }[] = [];

  for (const filter in filters) {
    techsFilters = [...techsFilters, ...(techs[filter as keyof typeof techs] || [])];
  }

  return (
    <>
      <FiltersContainer label="Roles">
        {rolesFilters.map((roleFilter) => (
          <Checkbox
            key={roleFilter.value}
            checked={!!filters[roleFilter.value]}
            value={roleFilter.value}
            label={roleFilter.name}
            onChange={() => {
              if (filters[roleFilter.value]) {
                removeFilter([
                  roleFilter.value,
                  ...techs[roleFilter.value as keyof typeof techs].map((item) => item.value),
                ]);
              } else {
                toggleFilter(roleFilter.value);
              }
            }}
          />
        ))}
      </FiltersContainer>
      {!!techsFilters?.length && (
        <FiltersContainer label="Technologies">
          {techsFilters.map((techsFilter) => (
            <Checkbox
              key={techsFilter.value}
              value={techsFilter.value}
              label={techsFilter.name}
              onChange={(e) => toggleFilter(e?.target?.value || '')}
              checked={!!filters[techsFilter.value]}
            />
          ))}
        </FiltersContainer>
      )}
    </>
  );
};

export default FindProjectFilters;
