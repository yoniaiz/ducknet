import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useStore from 'store';

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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {rolesFilters.map((roleFilter) => (
          <FormControlLabel
            key={roleFilter.value}
            control={
              <Checkbox
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
                checked={!!filters[roleFilter.value]}
                value={roleFilter.value}
                id={roleFilter.value}
              />
            }
            label={roleFilter.name}
            htmlFor={roleFilter.value}
          />
        ))}
      </div>
      <br />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {techsFilters.map((techsFilter) => (
          <FormControlLabel
            key={techsFilter.value}
            control={
              <Checkbox
                onChange={(e) => toggleFilter(e.target.value)}
                checked={!!filters[techsFilter.value]}
                value={techsFilter.value}
                id={techsFilter.value}
              />
            }
            label={techsFilter.name}
            htmlFor={techsFilter.value}
          />
        ))}
      </div>
    </>
  );
};

export default FindProjectFilters;
