import type { Meta, StoryObj } from '@storybook/react';
import Toast from '../../../components/Toast/Toast';

const meta = {
  title: 'Components/Feedback',
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: 'Operation was successful!',
    type: 'success',
    duration: 3000,
    showCloseButton: true,
  },
};

export const ManualCloseOnly: Story = {
  args: {
    message: 'You must manually close me.',
    showCloseButton: true,
    duration: 10000,
    
  },
};

export const Error: Story = {
    args: {
        message: 'Error 404',
        type: 'error',
        duration: 3000,
        showCloseButton: true
    }
}

export const Warning: Story = {
    args: {
        message: 'Warning!',
        type: 'warning',
        duration: 3000,
        showCloseButton: true
    }
}
