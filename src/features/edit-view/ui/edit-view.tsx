import { useState } from 'react';
import { Field } from '@/shared/ui/field/ui/field';
import { ProfileField } from '../model/types';

interface EditViewProps {
  fields: ProfileField[];
}

export const EditView = ({ fields }: EditViewProps) => {
  const [profileData, setProfileData] = useState<ProfileField[]>(fields);
  const handleFieldChange = (index: number, newValue: string | number | boolean) => {
    setProfileData((prevState) => {
      const newFields = [...prevState];

      if (typeof newValue === 'boolean') {
        newFields[index].checked = newValue;
      } else {
        newFields[index].value = newValue;
      }

      const ageField = newFields.find((f) => f.label === 'Age');
      const newsletterField = newFields.find((f) => f.label === 'Receive Newsletter');

      if (ageField && newsletterField) {
        const ageValue = Number(ageField.value);

        if (ageValue < 18) {
          newsletterField.checked = false;
        } else {
          newsletterField.checked = true;
        }
      }

      return newFields;
    });
  };

  return (
    <div>
      {profileData.map((field, index) => (
        <Field
          key={index}
          label={field.label}
          type={field.type}
          value={field.value}
          options={field.options}
          onChange={(newValue) => handleFieldChange(index, newValue)}
          checked={field.checked}
        />
      ))}
    </div>
  );
};
