import React from 'react';
// We want to always get from source
import { Button } from '../lib/quantum-button';

export default { title: 'Button' };

export const primary = () => <Button>Hello Button</Button>;

export const secondary = () => <Button variant="secondary">Hello Button</Button>