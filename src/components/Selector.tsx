import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import { TextInput } from 'react-native';
import { ProjectInterface } from '../interfaces/project.interface';

interface SelectorProps {
  data: ProjectInterface[];
  selectedValue: ProjectInterface;
  setSelectedValue: (project: ProjectInterface) => void;
}

const Selector: React.FC<SelectorProps> = ({
  data,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <ModalSelector
      data={data}
      keyExtractor={item => item.id}
      labelExtractor={item => item.name}
      scrollViewAccessibilityLabel={'Scrollable options'}
      cancelText="Esci"
      onChange={(itemValue: ProjectInterface) => setSelectedValue(itemValue)}
      cancelContainerStyle={{ display: 'none' }}
      optionTextStyle={{
        color: 'black',
        textTransform: 'capitalize',
      }}
      optionStyle={{
        height: 45,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      optionContainerStyle={{ backgroundColor: 'white' }}>
      <TextInput
        style={{
          height: 45,
          color: 'black',
          textTransform: 'capitalize',
          fontStyle: 'italic',
          paddingLeft: 10,
          fontSize: 16,
        }}
        editable={false}
        value={selectedValue.name}
      />
    </ModalSelector>
  );
};

export default Selector;
