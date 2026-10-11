#version 300 es
precision mediump float;
uniform vec4 u_Color;
in vec3 v_Normal;
layout(location = 0) out vec4 o_FragColor;
void main() {
  // jednostavno osvetljenje plastike: svetlo odozgo-spreda u prostoru kamere
  vec3 n = normalize(v_Normal);
  vec3 l = normalize(vec3(0.3, 0.8, 0.6));
  float d = max(dot(n, l), 0.0);
  float rim = pow(1.0 - max(n.z, 0.0), 3.0) * 0.15;
  vec3 c = u_Color.rgb * (0.45 + 0.65 * d) + rim;
  o_FragColor = vec4(c, 1.0);
}
