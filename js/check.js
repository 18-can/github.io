
        // 切换注册表单
        document.querySelectorAll('.register-tabs a').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                
                // 移除所有active类
                document.querySelectorAll('.register-tabs a').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.register-form').forEach(f => f.classList.remove('active'));
                
                // 添加active类到当前选中的标签
                tab.classList.add('active');
                document.querySelector(tab.getAttribute('href')).classList.add('active');
            });
        });

        // 切换密码可见性
        document.querySelectorAll('.toggle-password').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const input = toggle.previousElementSibling;
                if (input.type === 'password') {
                    input.type = 'text';
                    toggle.classList.remove('fa-eye-slash');
                    toggle.classList.add('fa-eye');
                } else {
                    input.type = 'password';
                    toggle.classList.remove('fa-eye');
                                        toggle.classList.add('fa-eye-slash');
                                    }
                                });
                            });
                    
                            // 密码强度检测
                            document.querySelectorAll('input[type="password"]').forEach(input => {
                                if (input.placeholder.includes('设置')) {
                                    input.addEventListener('input', (e) => {
                                        const password = e.target.value;
                                        const strengthBars = e.target.parentElement.nextElementSibling.children;
                                        
                                        // 重置所有强度条
                                        Array.from(strengthBars).forEach(bar => bar.classList.remove('active'));
                                        
                                        // 检查密码强度
                                        if (password.length >= 6) {
                                            strengthBars[0].classList.add('active');
                                            
                                            if (/[0-9]/.test(password) && /[a-zA-Z]/.test(password)) {
                                                strengthBars[1].classList.add('active');
                                                
                                                if (/[^a-zA-Z0-9]/.test(password)) {
                                                    strengthBars[2].classList.add('active');
                                                }
                                            }
                                        }
                                    });
                                }
                            });
                    
                            // 验证码倒计时
                            document.querySelectorAll('.btn-send-code').forEach(button => {
                                button.addEventListener('click', () => {
                                    if (!button.disabled) {
                                        let countdown = 60;
                                        button.disabled = true;
                                        button.textContent = `${countdown}秒后重试`;
                                        
                                        const timer = setInterval(() => {
                                            countdown--;
                                            button.textContent = `${countdown}秒后重试`;
                                            
                                            if (countdown === 0) {
                                                clearInterval(timer);
                                                button.disabled = false;
                                                button.textContent = '获取验证码';
                                            }
                                        }, 1000);
                                    }
                                });
                            });
							      
							            // 音乐控制功能
							            const musicControl = document.querySelector('.music-control');
							            const bgMusic = document.getElementById('bgMusic');
							            let isPlaying = true; // 默认为播放状态
							    
							            // 尝试自动播放
							            window.addEventListener('load', async () => {
							                try {
							                    // 尝试播放
							                    await bgMusic.play();
							                    musicControl.classList.add('playing');
							                    isPlaying = true;
							                } catch (err) {
							                    // 如果自动播放失败（大多数情况下会失败）
							                    console.log('自动播放失败，需要用户手动点击播放');
							                    musicControl.classList.remove('playing');
							                    isPlaying = false;
							                }
							            });
							    
							            // 点击控制播放/暂停
							            musicControl.addEventListener('click', () => {
							                if (isPlaying) {
							                    bgMusic.pause();
							                    musicControl.classList.remove('playing');
							                } else {
							                    bgMusic.play();
							                    musicControl.classList.add('playing');
							                }
							                isPlaying = !isPlaying;
							            });
							    
							            // 监听用户与页面的第一次交互，尝试播放音乐
							            document.addEventListener('click', function initAudio() {
							                if (!isPlaying) {
							                    bgMusic.play();
							                    musicControl.classList.add('playing');
							                    isPlaying = true;
							                }
							                // 移除这个一次性的事件监听器
							                document.removeEventListener('click', initAudio);
							            }, { once: true });
							     

							  
