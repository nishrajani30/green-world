import {renderHook} from "@testing-library/react";
import { useNavigate } from 'react-router-dom';
import useLanding from './useLanding';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('useLanding hook', () => {
  it('should call navigate to /login', () => {
    const navigate = jest.fn();
    // @ts-ignore
    useNavigate.mockReturnValue(navigate);

    const { result } = renderHook(() => useLanding());
    result.current.navigateToLogin();

    expect(navigate).toHaveBeenCalledWith('/login');
  });
});