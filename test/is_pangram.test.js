const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toEqual(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';
    // Act
    const answer = isPangram(text);
    // Assert
    expect(answer).toEqual(true);
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'the quick brown fo jumps over the lazy dog';
    // Act
    const answer = isPangram(text);
    // Assert
    expect(answer).toEqual(false);
  });

  test('empty sentence', () => {
    // Arrange
    const text = '';
    // Act
    const answer = isPangram(text);
    // Assert
    expect(answer).toEqual(false)
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'a_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u_v_w_x_y_z';
    // Act
    const answer = isPangram(text);
    // Assert
    expect(answer).toEqual(true);
  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz123';
    // Act
    const answer = isPangram(text);
    // Assert
    expect(answer).toEqual(true);
  });

  // Write your own test case
  test('returns true for pangrams with multiple of the same letters', () => {
    const text = 'aabcdefghijklmnopqrstuvwxyz1';
    
    const answer = isPangram(text);

    expect(answer).toEqual(true);
  })
});
