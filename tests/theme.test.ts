import theme from '../src/styles/theme';

describe('Theme Configuration', () => {
  it('should have correct primary colors', () => {
    expect(theme.palette.primary.main).toBe('#81c784');
    expect(theme.palette.primary.light).toBe('#b2fab4');
    expect(theme.palette.primary.dark).toBe('#519657');
  });

  it('should have correct secondary colors', () => {
    expect(theme.palette.secondary.main).toBe('#e57373');
    expect(theme.palette.secondary.light).toBe('#ffa4a2');
    expect(theme.palette.secondary.dark).toBe('#af4448');
  });

  it('should have correct typography configurations', () => {
    expect(theme.typography.h5?.fontWeight).toBe(600);
    expect(theme.typography.h6?.fontWeight).toBe(500);
  });

  it('should have correct background colors', () => {
    expect(theme.palette.background.default).toBe('#ffffff');
    expect(theme.palette.background.paper).toBe('#f5f5f5');
  });
});
